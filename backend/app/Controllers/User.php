<?php 
    namespace Controllers;
    use Vendor\Controller;
    use Models\User as UserModel;
    class User extends Controller
    {
        private $em;
        public function __construct() {
            $this->em = new UserModel();
        }

        public function getUsers(){
            if (isset($_POST['id'])) {
                $id = $_POST['id'];
                return $this->em->getUser($id);
            } else {
                return $this->em->getUsers();
            }      
        }
        public function newUser()
        {
 
            $password = $_POST['password'];
            $name=$_POST['username'];
            $role=$_POST['role'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $address=$_POST['address'];
            
            return $this->em->newUser($password, $email, $phone,$name,$address,$role);
        }
        function removeUser()
        {
            $id = $_POST['email'];
            return $this->em->removeUser($id);
            
        }
        function updateUser()
        {   
            if (isset($_POST['role'])) {
                $id = $_POST['id'];
                $password = $_POST['password'];
                $name=$_POST['username'];
                $role=$_POST['role'];
                $email = $_POST['email'];
                $phone = $_POST['phone'];
                $address=$_POST['address'];
                return $this->em->updateUser($id, $password, $email, $phone,$name,$address,$role);
            }else{
                $id = $_POST['id'];
                $email = $_POST['email'];
                if ($id==$password) {
                    $name=$_POST['username'];
                    $password = $_POST['password'];
                    $phone = $_POST['phone'];
                    $address=$_POST['address'];
                    return $this->em->updateUser2($id,$password,$phone,$name,$address);
                }
                else{
                    $name=$_POST['username'];
                    $password = $_POST['password'];
                    $phone = $_POST['phone'];
                    $address=$_POST['address'];
                    return $this->em->updateUser3($id, $password, $email, $phone,$name,$address);
                }
                
            }
          
           
        }
        function updatepassword(){
            $password = $_POST['password'];
            $email = $_POST['email'];
            return $this->em->updatepassword($password, $email);
        }
    }
?>