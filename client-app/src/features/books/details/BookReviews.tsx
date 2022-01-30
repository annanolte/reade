import { Field, FieldProps, Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Comment, Header, Loader, Segment } from 'semantic-ui-react'
import * as Yup from 'yup'
import { useStore } from '../../../app/stores/store'

interface Props {
    bookId: string;
}

export default observer(function BookReviews({ bookId }: Props) {
    const { commentStore } = useStore();

    useEffect(() => {
        if (bookId) {
            commentStore.createHubConnection(bookId);
        }
        return () => {
            commentStore.clearComments();
        }
    }, [commentStore, bookId]);

    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='green'
                style={{ border: 'none' }}
            >
                <Header>Leave a review</Header>
            </Segment>
            <Segment attached clearing>
                <Formik
                    onSubmit={(values, { resetForm }) =>
                        commentStore.addComment(values).then(() => resetForm())}
                    initialValues={{ body: '' }}
                    validationSchema={Yup.object({
                        body: Yup.string().required()
                    })}
                >
                    {({ isSubmitting, isValid, handleSubmit }) => (
                        <Form className='ui form'>
                            <Field name='body'>
                                {(props: FieldProps) => (
                                    <div style={{ position: 'relative' }}>
                                        <Loader active={isSubmitting} />
                                        <textarea
                                            placeholder='Write your review and press Enter to submit (press SHIFT + Enter for a new line)'
                                            rows={2}
                                            {...props.field}
                                            onKeyPress={e => {
                                                if (e.key === 'Enter' && e.shiftKey) {
                                                    return;
                                                }
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    isValid && handleSubmit();
                                                }
                                            }}
                                        />
                                    </div>
                                )}
                            </Field>
                        </Form>
                    )}
                </Formik>
                <Comment.Group>
                    {commentStore.comments.map(comment => (
                        <Comment key={comment.id}>
                            <Comment.Avatar src={'/assets/user.png'} />
                            <Comment.Content>
                                <Comment.Author as={Link} to={`/profile/${comment.username}`}>
                                    {comment.username}
                                </Comment.Author>
                                <Comment.Text>{comment.body}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>
            </Segment>
        </>
    )
})