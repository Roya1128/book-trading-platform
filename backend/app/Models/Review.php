<?php
    namespace Models;
    use Vendor\DB;
    
    class Review{
        public function getreviews(){
            $sql = "SELECT  *  FROM  `reviews`";
            $arg = NULL;
            return DB::select($sql, $arg);
        }
        public function getreview($id){
            $sql = "SELECT reviews.BookID,reviews.email,product.ProdName,user.username,reviews.date,content FROM
             `reviews`,`product`,`user` WHERE reviews.BookID=? and reviews.BookID=product.BookID and reviews.email=user.email";
            $arg = array($id);
            return DB::select($sql, $arg);
        }
        public function newreview($id, $email,$content){
            $sql = "INSERT INTO `reviews` (`BookID`,`email`,`content`) VALUES (?, ?, ?)";
            return DB::insert($sql, array($id,$email,$content));
        }
        public function removereview($id,$email,$date){
            $sql = "DELETE FROM `reviews` WHERE BookId=? and email=? and date=?";
            return DB::delete($sql, array($id,$email,$date));
        }
        public function updatereview($id, $password, $email, $phone,$name,$address,$tdate){
            $sql = "UPDATE `reviews` SET `password`=?, `email`=?, `phone`=?, `name`=?, `address`=?, `tdate`=? WHERE id=?";
            return DB::update($sql, array($id, $password, $email, $phone,$name,$address,$tdate));
        }
    }

?>