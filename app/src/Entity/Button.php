<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass="App\Repository\ButtonRepository")
 */
class Button
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     */
    private $title;


    /**
     * Many Users have Many Groups.
     * @ORM\ManyToMany(targetEntity="Page", fetch="EAGER")
     * @ORM\JoinTable(name="buttons_pages",
     *      joinColumns={@ORM\JoinColumn(name="button_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="page_id", referencedColumnName="id")}
     *      )
     */
    private $pages;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title): void
    {
        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getPages()
    {
        return $this->pages;
    }

    public function setPages( $pages)
    {
        $this->pages[] = $pages;
    }

    public function __toString(){
        return $this->title;
    }


    public function __construct()
    {

        $this->pages = new ArrayCollection();

    }

}
