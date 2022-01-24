using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedTestMin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PageCount",
                table: "Books");

            migrationBuilder.RenameColumn(
                name: "PublishedDate",
                table: "Books",
                newName: "PublishDate");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Books",
                newName: "Image_url");

            migrationBuilder.AddColumn<int>(
                name: "Pages",
                table: "Books",
                type: "INTEGER",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pages",
                table: "Books");

            migrationBuilder.RenameColumn(
                name: "PublishDate",
                table: "Books",
                newName: "PublishedDate");

            migrationBuilder.RenameColumn(
                name: "Image_url",
                table: "Books",
                newName: "Image");

            migrationBuilder.AddColumn<int>(
                name: "PageCount",
                table: "Books",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
