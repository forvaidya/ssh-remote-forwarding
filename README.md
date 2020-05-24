# ssh-remote-forwarding
## An example of SSH remote forwarding

### Use Case
Suppose you have a web application running *(usually a development setup on laptop)* and you want show / demo it to your manager / client. You can use  SSH remote forwarding to a publically routable machine to expose your locally running application to internet.

Following demonstration uses AWS EC2 micro instance in free tier.

### Procedure 
#### Assumptions
+ You are running any publically routable instance, EC2 in my case
+ Remote port is `12345` - Adjust your security Group / iptable accordingly !!
+ Remote port SSH/22 is open - Adjust your security Group / iptable accordingly !!
+ OpenSSH server is running
+ `/etc/ssh/sshd_conf`
   have an entry
   
   `GatewayPorts yes`
   
+ Web application is running on port `8080` on localhost

#### Restart SSH daemon after config change !!

   
#### Run a local web application

Run accompanied node application `node test.js`

Test Local setup using `curl http://localhost:8080`. 

#### Run an EC2 Instance
Run an EC2 Instance.
(you may have an existing pem file or create new and save it locally)
Change /etc/ssh/sshd_config as discussed in *Assumptions* section above

#### ~/.ssh/config changes
Use accompanied template *ssh_config_template.txt* and copy it to `~/.ssh/config` file
Change Host (External IP) and IdentityFile to match with values of your setup.

I call this config as `proxit`

## Remote Forward
`ssh -N proxit`

## Testing
go to any web browser on any device and put `http://EXTERNAL_IP:12345`
In my case it was `http://52.66.93.99:12345`

## Expected Result

`Hello World! 190` 
Number must increase monotonically

Result must be similar to
`curl http://localhost:8080` on local machine / laptop.



#### Author
forvaidya@gmail.com
+91-8049527274 (on weekends only !!)
