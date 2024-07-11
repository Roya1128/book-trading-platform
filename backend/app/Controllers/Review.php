<?php 
    namespace Controllers;
    use Vendor\Controller;
    use Models\Review as ReviewModel;
    class Review extends Controller
    {
        private $em;
        public function __construct() {
            $this->em = new ReviewModel();
        }

        public function getreviews(){
            if (isset($_POST['id'])) {
                $id = $_POST['id'];
                return $this->em->getreview($id);
            } else {
                return $this->em->getreviews();
            }      
        }
        public function newreview()
        {
            $id = $_POST['BookID'];
            $content=$_POST['content'];
            $email = $_POST['email'];

            
            return $this->em->newreview($id, $email,$content);
        }
        function removereview()
        {
            $id=$_POST['prodid'];
            $email=$_POST['email'];
            $date=$_POST['date'];

            return $this->em->removereview($id,$email,$date);
            
        }
        function updatereview()
        {
            $id = $_POST['id'];
            $password = $_POST['password'];
            $name=$_POST['name'];
            $tdate=$_POST['tdate'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $address=$_POST['address'];
            return $this->em->updatereview($id, $password, $email, $phone,$name,$address,$tdate);
        }
    }

    
?>