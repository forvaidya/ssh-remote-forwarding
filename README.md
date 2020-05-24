# ssh-remote-forwording
## An example of SSH remote forwording

### Use Case
Suppose you have a web application running *(usually and development setup on laptop)* and you want show / demo it to your manager / client. You can accomplish it using SSH remote forwarding to a publically routable machine.

Following demonstration uses AWS EC2 micro instance in free tire.

### Procedure 
#### Assumptions
+ You are running any publically routable instance, EC2 in my case
+ OpenSSH server is running
+ `/etc/ssh/sshd_conf/`
   have an entry 
   `GatewayPorts yes`
+ Web application run on port `8080`
+ Remote port is `12345`
   
#### Run a local web application

Run accompanied node application `node test.js`
Test Local setup using `curl http://localhost:8080`

#### Run an EC2 Instance
Run an EC2 Instance.
(you may have an existing pem file or create new and save it locally)
Change /etc/ssh/sshd_config as discussed in *Assumptions* section above

#### ~/.ssh/config changes
Use accompanied template *ssh_config_template.txt* and copy it to `~/.ssh/config` file
Change Host (External IP) and IdentityFile to match with values of your setup
I call this config as `proxit`

## Remote Forward
`ssh -N proxit`

## Testing
go to any web browser on any device and put `http://EXTERNAL_IP:12345`
In my case it was `http://52.66.93.99:12345`

## Expected Result

`Hello World! 190` 
Number must monotonically increase


#### Author
forvaidya@gmail.com
+91-8049527274 (on weekends only !!)
