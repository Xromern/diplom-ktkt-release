<?php


namespace App\Twig;

use App\Entity\Button;
use App\Entity\MainMenu;
use App\Service\Helper;
use Doctrine\Common\Persistence\ObjectManager;
use Twig\TwigFunction;

class Functions extends \Twig_Extension{

    private $menager;

    public function __construct(
        ObjectManager $manager
    ){
        $this->menager = $manager;
    }

    public function getFunctions()
    {

        return array(
            new TwigFunction('inner_menu', [$this, 'inner_menu']),
            new TwigFunction('buttons', [$this, 'buttons']),
            new TwigFunction('main_menu', [$this, 'main_menu']),

        );
    }

    /**
     * Строит дерево категорий
     * @param array $cats
     * @return array
     */
    public function inner_menu(){

        return Helper::createMenu($this->menager);
    }

    /**
     * Строит дерево категорий
     * @param array $cats
     * @return array
     */
    public function buttons(){

        $buttons = $this->menager->getRepository(Button::class);

        return $buttons->findAll();
    }
    /**
     * Строит дерево категорий
     * @param array $cats
     * @return array
     */
    public function main_menu(){

        $mainMenu = $this->menager->getRepository(MainMenu::class);

        return $mainMenu->findAll();
    }
    public function getName()
    {
        return 'tree';
    }

}
