import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMigrationRecordViewsLessons1624395630718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "table_record_view_lesson",
                columns: [
                    {
                        name: "id_record_view_lesson",
                        type: "uuid",
                        generationStrategy: "uuid",
                        isPrimary: true,
                        isUnique: true,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "id_lesson",
                        type: "uuid"
                    },
                    {
                        name: "id_student",
                        type: "uuid"
                    },
                    {
                        name: "is_view",
                        type: "boolean"
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
        await queryRunner.dropTable("table_record_view_lesson");
    }

}
