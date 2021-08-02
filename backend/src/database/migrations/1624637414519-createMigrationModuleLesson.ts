import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMigrationModuleLesson1624637414519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "table_module_lesson",
                columns: [
                    {
                        name: "id_module_lesson",
                        type: "uuid",
                        generationStrategy: "uuid",
                        isPrimary: true,
                        isUnique: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "order_module",
                        type: "int"
                    },
                    {
                        name: "name_module",
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
        await queryRunner.dropTable('table_module_lesson');
    }

}
