<?php 
    namespace app\Controllers;
    use vendor\Controller;
    use app\Models\Employee as EmployeeModel;
    class Employee extends Controller
    {
        private $em;
        public function __construct() {
            $this->em = new EmployeeModel();
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
            $id = $_POST['id'];
            $password = $_POST['password'];
            $name=$_POST['name'];
            $tdate=$_POST['tdate'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $address=$_POST['address'];
            
            return $this->em->newUser($id, $password, $email, $phone,$name,$address,$tdate);
        }
        function removeUser()
        {
            $id = $_POST['id'];
            return $this->em->removeUser($id);
            
        }
        function updateUser()
        {
            $id = $_POST['id'];
            $password = $_POST['password'];
            $name=$_POST['name'];
            $tdate=$_POST['tdate'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $address=$_POST['address'];
            return $this->em->updateUser($id, $password, $email, $phone,$name,$address,$tdate);
        }
    }

    
?>