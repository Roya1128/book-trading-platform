<?php
    namespace Models;
    use Vendor\DB;
    
    class Product{
        public function getProducts(){
            $sql = "SELECT  *  FROM  `Product`";
            $arg = NULL;
            return DB::select($sql, $arg);
        }
        public function getProduct($department){
            $sql = "SELECT  *  FROM  `Product` WHERE `BookID` like '$department%'";
            $arg = array($department);
            return DB::select($sql);
        }
        public function newProduct($id, $name, $price,$qty){
            $sql = "INSERT INTO `product` (`BookID`, `ProdName`, `UnitPrice`,`qty`) VALUES (?, ?, ?, ?)";
            return DB::insert($sql, array($id, $name, $price,$qty));
        }
        public function removeProduct($id){
            $sql = "DELETE FROM `Product` WHERE BookID=?";
            return DB::delete($sql, array($id));
        }
        public function updateProduct($id,$bookid, $name, $price,$qty){
            $sql = "UPDATE `product` SET  `BookID`=?,`ProdName`=?, `UnitPrice`=? ,`qty`=? WHERE BookID=?";
            return DB::update($sql, array($bookid, $name, $price,$qty,$id));
        }
    }

?>