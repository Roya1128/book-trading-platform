<?php
    namespace Models;
    use Vendor\DB;
    
    class User{
        public function getUsers(){
            $sql = "SELECT  *  FROM  `user`";
            $arg = NULL;
            return DB::select($sql, $arg);
        }
        public function getUser($id){
            $sql = "SELECT  *  FROM  `user` WHERE `email`=?";
            $arg = array($id);
            return DB::select($sql, $arg);
        }
        public function newUser( $password, $email, $phone,$name,$address,$role){
            $sql = "INSERT INTO `user` (`email`, `password`,`phone`,`username`,`address`,`role`) VALUES (?, ?, ?, ?, ?, ?)";
            return DB::insert($sql, array($email, $password, $phone,$name,$address,$role));
        }
        public function removeUser($id){
            $sql = "DELETE FROM `user` WHERE `email`=?";
            return DB::delete($sql, array($id));
        }
        public function updateUser($id, $password, $email, $phone,$name,$address,$role=1){
            $sql = "UPDATE `user` SET `email`=?,`password`=?, `phone`=?, `username`=?, `address`=?, `role`=? WHERE `email`=?";
            return DB::update($sql, array( $email,$password,  $phone,$name,$address,$role,$id));
        }
        public function updateUser2($id,$password,$phone,$name,$address){
            $sql = "UPDATE `user` SET `password`=?, `phone`=?, `username`=?, `address`=? WHERE `email`=?";
            return DB::update($sql, array( $password,$phone,$name,$address,$id));
        }
        public function updateUser3($id, $password, $email, $phone,$name,$address){
            $sql = "UPDATE `user` SET `email`=?,`password`=?, `phone`=?, `username`=?, `address`=? WHERE `email`=?";
            return DB::update($sql, array( $email,$password,  $phone,$name,$address,$id));
        }
        public function updatepassword($password, $email){
            $sql = "UPDATE `user` SET `password`=? WHERE `email`=?";
            return DB::update($sql, array( $password,$email));
        }
    }

?>