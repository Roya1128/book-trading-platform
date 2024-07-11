<?php
namespace Middlewares;
use \Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Vendor\Controller;
use Vendor\DB;
class AuthMiddleware extends Controller{
    public static function checkToken(){
        $headers = getallheaders();
        $jwt = $headers['Authorization'];
        $secret_key = "TEST_SECRET_KEY";
        try {
            $payload = JWT::decode($jwt,new Key($secret_key, 'HS256'));
            $jwt = self::genToken($payload->data->id);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['token'] = $jwt;
        } catch (Exception $e) {
            $response['status'] = 403;
            $response['message'] = $e->getMessage();
        }
        return $response;
        
    }
    public static function doLogin(){
        $email = $_POST['email'];
        $password = $_POST['password'];
            //  查詢DB驗證帳密的正確性
        $sql = "SELECT `role`,`email`,`username` from `user` where `email`=? and `password`=?";
        $arg = array($email,$password);
        $response= DB::select($sql, $arg);
        $jwt = self::genToken($email);
        $response['token'] = $jwt;
        return $response;
                
    }
    private static function genToken($id){
        $secret_key = "TEST_SECRET_KEY";
        $issuer_claim = "http://localhost";
        $audience_claim = "http://localhost";
        $issuedat_claim = time(); // issued at
        $expire_claim = $issuedat_claim + 1000;
        $payload = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "exp" => $expire_claim,
            "data" => array(
                "id" => $id,
            )
        );
        $jwt = JWT::encode($payload, $secret_key, 'HS256');
        return $jwt;
                
    }
}
?>