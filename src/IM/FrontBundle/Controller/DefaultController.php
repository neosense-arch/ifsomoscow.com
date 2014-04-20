<?php

namespace IM\FrontBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('IMFrontBundle:Default:index.html.twig', array('name' => $name));
    }
}
