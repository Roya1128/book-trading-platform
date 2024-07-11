<?php 
    namespace Controllers;
    use Vendor\Controller;
    use Models\Contact as ContactModel;
    class Contact extends Controller
    {
        private $em;
        public function __construct() {
            $this->em = new ContactModel();
        }

        public function getContacts(){
            if (isset($_POST['department'])) {
                $department = $_POST['department'];
                return $this->em->getContact($department);
            } else {
                return $this->em->getContacts();
            }      
        }
        public function newContact()
        {
            $email = $_POST['email'];
            $subject = $_POST['subject'];
            $message=$_POST['message'];
 

            
            return $this->em->newContact($email, $subject,$message);
        }
        function updateContact()
        {   $id=$_POST['id'];
            $bookid = $_POST['bookid'];
            $prodname = $_POST['prodname'];
            $price=$_POST['price'];
            $qty=$_POST['qty'];
            return $this->em->updateContact($id,$bookid, $prodname,$price,$qty);
        }
        function removeContact()
        {
            $email = $_POST['email'];
            $date = $_POST['date'];
            return $this->em->removeContact($email,$date);
        
        }
    }
?>
    
