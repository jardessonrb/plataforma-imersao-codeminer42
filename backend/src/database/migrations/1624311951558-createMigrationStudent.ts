import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMigrationStudent1624311951558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "table_student",
                columns: [
                    {
                        name: "id_student",
                        type: "uuid",
                        generationStrategy: "uuid",
                        isPrimary: true,
                        isUnique: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "name_student",
                        type: "varchar"
                    },
                    {
                        name: "email_student",
                        type: "varchar"
                    },
                    {
                        name: "password_student",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        isNullable: false,
                        default: "NOW()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("table_student");
    }

}
