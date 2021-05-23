<?php


namespace App\Twig;

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


    public function getName()
    {
        return 'tree';
    }

}
