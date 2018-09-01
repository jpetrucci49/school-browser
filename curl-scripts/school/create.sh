#!/bin/bash

curl "http://localhost:4741/schools" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "school": {
      "name": "'"${NAME}"'",
      "address": "'"${ADD}"'",
      "city": "'"${CITY}"'",
      "phone": "'"${PHONE}"'",
      "zip": "'"${ZIP}"'"
    }
  }'

echo
