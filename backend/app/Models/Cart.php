<?php
    namespace Models;
    use Vendor\DB;
    
    class Cart{
        public function getCart(){
            $sql = "SELECT  email,cart.BookID,num,UnitPrice,num*UnitPrice as total FROM `cart`,`product` WHERE cart.BookID=product.BookID and type='cart'";
            $arg = array();
            return DB::select($sql, $arg);
        }
        public function getOrder(){
            $sql = "SELECT  email,cart.BookID,num,UnitPrice,num*UnitPrice as total FROM `cart`,`product` WHERE cart.BookID=product.BookID and type='order'";
            $arg = array();
            return DB::select($sql, $arg);
        }
        public function getuserCarts($email){
            $sql = "SELECT email,cart.BookID,num,ProdName,UnitPrice,num*UnitPrice as total FROM `cart`,`product` WHERE email=? and cart.BookID=product.BookID and type='cart'";
            $arg = array($email);
            return DB::select($sql, $arg);
        }
        public function getuserCart($email,$id){
            $sql = "SELECT email,cart.BookID,num,ProdName,UnitPrice,num*UnitPrice as total FROM `cart`,`product` WHERE email=? and cart.BookID=? and cart.BookID=product.BookID and type='cart'";
            $arg = array($email,$id);
            return DB::select($sql, $arg);
        }
        public function getuserOrder($email,$id){
            $sql = "SELECT * FROM `cart` WHERE email=? and BookID=? and type='order'";
            $arg = array($email,$id);
            return DB::select($sql, $arg);
        }
        public function newCart($id, $email,$num){
            $sql = "INSERT INTO `cart` (`BookID`, `email`, `num`,`type`) VALUES (?, ?,$num ,'cart')";
            return DB::insert($sql, array($id, $email));
        }
        public function newOrder($id, $email,$num){
            $sql = "INSERT INTO `cart` (`BookID`, `email`, `num`,`type`) VALUES (?, ?,$num ,'order')";
            return DB::insert($sql, array($id, $email));
        }
        public function removeCart($id,$email){
            $sql = "DELETE FROM `cart` WHERE BookID=? and email=?";
            return DB::delete($sql, array($id,$email));
        }
        public function updateCart($id, $password, $email, $phone,$name,$address,$tdate){
            $sql = "UPDATE `cart` SET `password`=?, `email`=?, `phone`=?, `name`=?, `address`=?, `tdate`=? WHERE id=?";
            return DB::update($sql, array($id, $password, $email, $phone,$name,$address,$tdate));
        }
        public function updateOrder($id,$email,$num,$old,$oldid){
            $sql = "UPDATE `cart` SET `BookID`=?, `email`=?, `num`=?WHERE email=? and BookID=?";
            return DB::update($sql, array($id,$email,$num,$old,$oldid));
        }
        public function add($id,$email,$num){
            $sql =  "UPDATE `cart` SET num=num+$num WHERE BookID=? and email=? ";
            return DB::delete($sql, array($id,$email));
        }
        public function reduce($id,$email){
            $sql = "UPDATE `cart` SET num=num-1 WHERE BookID=? and email=? ";
            return DB::delete($sql, array($id,$email));
        }
        public function payoff($email){
            $sql = "UPDATE `cart` SET `type`='order' WHERE  email=? and type='cart' ";
            return DB::delete($sql, array($email));
        }
        
    }

?>