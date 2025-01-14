<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd32637832f540d23957d95711aff65e8
{
    public static $prefixLengthsPsr4 = array (
        'V' => 
        array (
            'Vendor\\' => 7,
        ),
        'M' => 
        array (
            'Models\\' => 7,
            'Middlewares\\' => 12,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
        'C' => 
        array (
            'Controllers\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Vendor\\' => 
        array (
            0 => 'C:\\xampp\\htdocs\\系統開發\\backend\\vendor',
        ),
        'Models\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/Models',
        ),
        'Middlewares\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/Middlewares',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
            1 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
        'Controllers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/Controllers',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd32637832f540d23957d95711aff65e8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd32637832f540d23957d95711aff65e8::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd32637832f540d23957d95711aff65e8::$classMap;

        }, null, ClassLoader::class);
    }
}
