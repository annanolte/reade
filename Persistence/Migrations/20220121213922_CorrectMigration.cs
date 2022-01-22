using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class CorrectMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Page_number",
                table: "Books");

            migrationBuilder.RenameColumn(
                name: "Publication_year",
                table: "Books",
                newName: "PageCount");

            migrationBuilder.RenameColumn(
                name: "Author",
                table: "Books",
                newName: "PublishedDate");

            migrationBuilder.AddColumn<string>(
                name: "Authors",
                table: "Books",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Authors",
                table: "Books");

            migrationBuilder.RenameColumn(
                name: "PublishedDate",
                table: "Books",
                newName: "Author");

            migrationBuilder.RenameColumn(
                name: "PageCount",
                table: "Books",
                newName: "Publication_year");

            migrationBuilder.AddColumn<int>(
                name: "Page_number",
                table: "Books",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
