import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMigrationLesson1624395208123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "table_student",
                columns: [
                    {
                        name: "id_lesson",
                        type: "uuid",
                        generationStrategy: "uuid",
                        isPrimary: true,
                        isUnique: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "name_lesson",
                        type: "varchar"
                    },
                    {
                        name: "id_module_lesson",
                        type: "uuid"
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
        await queryRunner.dropTable("table_lesson");
    }

}
