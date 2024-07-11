<?php 
    namespace Controllers;
    use Vendor\Controller;
    use Models\Product as ProductModel;
    class Product extends Controller
    {
        private $em;
        public function __construct() {
            $this->em = new ProductModel();
        }

        public function getProducts(){
            if (isset($_POST['department'])) {
                $department = $_POST['department'];
                return $this->em->getProduct($department);
            } else {
                return $this->em->getProducts();
            }      
        }
        public function newProduct()
        {
            $bookid = $_POST['bookid'];
            $prodname = $_POST['prodname'];
            $price=$_POST['price'];
            $qty=$_POST['qty'];

            
            return $this->em->newProduct($bookid, $prodname,$price,$qty);
        }
        function updateProduct()
        {   $id=$_POST['id'];
            $bookid = $_POST['bookid'];
            $prodname = $_POST['prodname'];
            $price=$_POST['price'];
            $qty=$_POST['qty'];
            return $this->em->updateProduct($id,$bookid, $prodname,$price,$qty);
        }
        function removeProduct()
        {
            $id = $_POST['bookid'];
            return $this->em->removeProduct($id);
        
        }
    }
?>
    
