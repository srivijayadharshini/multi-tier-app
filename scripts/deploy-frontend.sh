#!/bin/bash
sudo cp frontend/index.html /var/www/html/index.html
sudo systemctl restart httpd
