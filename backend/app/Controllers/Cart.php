<?php 
    namespace Controllers;
    use Vendor\Controller;
    use Models\Cart as CartModel;
    class Cart extends Controller
    {
        private $em;
        public function __construct() {
            $this->em = new CartModel();
        }

        public function getuserCarts(){

                $email = $_POST['email'];
                return $this->em->getuserCarts($email);
        }
        
        public function getuserCart(){
            $id = $_POST['bookid'];
            $email = $_POST['email'];
            return $this->em->getuserCart($email,$id);
        }
        public function getuserOrder(){
            $id = $_POST['bookid'];
            $email = $_POST['email'];
            return $this->em->getuserOrder($email,$id);
        }
        public function getCart(){
                return $this->em->getCart();
        }
        public function getOrder(){
                return $this->em->getOrder();
    }

    public function newCart()
    {
        $id = $_POST['bookid'];
        $email = $_POST['email'];
        $num=$_POST['num'];
        return $this->em->newCart($id,$email,$num);
    }
    public function newOrder()
        {
            $id = $_POST['bookid'];
            $email = $_POST['email'];
            $num=$_POST['num'];
            return $this->em->newOrder($id,$email,$num);
        }
        public function payoff()
        {
            $email = $_POST['email'];
            return $this->em->payoff($email);
        }
        function removeCart()
        {
            $id = $_POST['bookid'];
            $email=$_POST['email'];
            return $this->em->removeCart($id,$email);
            
        }
        function updateCart()
        {   
            $id = $_POST['bookid'];
            $email=$_POST['email'];
            $do=$_POST['do'];
            $num=$_POST['num'];
            if ($do=='add') {
                return $this->em->add($id,$email,$num);
            }else{
                return $this->em->reduce($id,$email);
            }
           
        }
        function updateOrder()
        {   
            $id = $_POST['bookid'];
            $email=$_POST['email'];
            $num=$_POST['qty'];
            $old=$_POST['oldemail'];
            $oldid=$_POST['oldid'] ;
            return $this->em->updateOrder($id,$email,$num,$old,$oldid);
        }
    }

    
?>