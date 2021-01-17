<?php 
 class Person{
    private $name;
    private $email;

    public funcion __construct($name, $email){
        $this->name = $name;
        $this->email = $email;
        echo __CLASS__.' Created';
    }
    public function getName(){
        return $this->name;
    }
}
$person1 = new Person('Sachin', 'Sachin@gmail.com');
echo $person1->getName();
?>