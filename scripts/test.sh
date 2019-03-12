#!/bin/bash
set -euo pipefail

print () {
    echo "TESTING ...."
    sleep $1
}

print 10
print 30
print 60
