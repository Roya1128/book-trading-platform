<?php
    namespace Models;
    use Vendor\DB;
    
    class Contact{
        public function getContacts(){
            $sql = "SELECT  *  FROM  `contact`";
            $arg = NULL;
            return DB::select($sql, $arg);
        }
        public function getContact($department){
            $sql = "SELECT  *  FROM  `contact` WHERE `BookID` like '$department%'";
            $arg = array($department);
            return DB::select($sql);
        }
        public function newContact($email,$subject,$content){
            $sql = "INSERT INTO `contact` ( `email`, `subject`,`content`) VALUES (?, ?, ?)";
            return DB::insert($sql, array($email, $subject,$content));
        }
        public function removeContact($email,$date){
            $sql = "DELETE FROM `contact` WHERE email=? and datetime=?";
            return DB::delete($sql, array($email,$date));
        }
        public function updateContact($id,$bookid, $name, $price,$qty){
            $sql = "UPDATE `contact` SET  `BookID`=?,`ProdName`=?, `UnitPrice`=? ,`qty`=? WHERE BookID=?";
            return DB::update($sql, array($bookid, $name, $price,$qty,$id));
        }
    }

?>