#!/bin/bash
konsole -e tmuxinator start devshell &
code &
firefox https://localhost:8080/ &
exit
