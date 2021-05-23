<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210523175946 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE button (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE buttons_pages (button_id INT NOT NULL, page_id INT NOT NULL, INDEX IDX_ECDE45E0A123E519 (button_id), INDEX IDX_ECDE45E0C4663E4 (page_id), PRIMARY KEY(button_id, page_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE buttons_pages ADD CONSTRAINT FK_ECDE45E0A123E519 FOREIGN KEY (button_id) REFERENCES button (id)');
        $this->addSql('ALTER TABLE buttons_pages ADD CONSTRAINT FK_ECDE45E0C4663E4 FOREIGN KEY (page_id) REFERENCES page (id)');

    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE buttons_pages DROP FOREIGN KEY FK_ECDE45E0A123E519');
        $this->addSql('DROP TABLE button');
        $this->addSql('DROP TABLE buttons_pages');
    }
}
