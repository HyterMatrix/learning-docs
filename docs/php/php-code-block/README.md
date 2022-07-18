# PHP代码块

## 在PHP代码中做ping

```php
// ping 域名
function pingAddress($address,$proxy=false) {
    $status = -1;
        if (strcasecmp(PHP_OS, 'WINNT') === 0) {
            // Windows 服务器下
            $pingresult = exec("ping -n 1 {$address}", $outcome, $status);
        } elseif (strcasecmp(PHP_OS, 'Linux') === 0) {
            // Linux 服务器下
            $pingresult = exec("ping -c 1 {$address}", $outcome, $status);
        }elseif (strcasecmp(PHP_OS, 'Darwin') === 0){
            // MacOS 下
            $pingresult = exec("ping -c 1 {$address}", $outcome, $status);
        }
        if (0 == $status) {
            $status = true;
        } else {
            $status = false;
        }
    return $status;
}
```



## 读取pfx证书

```php
<?php
  
$certPath = './test.pfx';
$certPd = '123456';
$pkcs12certdata = file_get_contents ( $certPath );
if($pkcs12certdata === false ){
  exit ($certPath . "读取失败。");
}
openssl_pkcs12_read ( $pkcs12certdata, $certs, $certPd );
$x509data = $certs ['cert'];
openssl_x509_read ( $x509data );
$certdata = openssl_x509_parse ( $x509data );
$cert['certId'] = $certdata ['serialNumber'];
$cert['certIdHex'] = $certdata ['serialNumberHex'];
$cert['key'] = $certs ['pkey'];
$cert['cert'] = $x509data;

echo $cert;
```

