import requests

# Chase API endpoint for initiating a transaction (replace with the actual endpoint)
chase_api_url = "https://api.chase.com/v1/transactions"

# Chase API key
api_key = "9GMXG-P9JCU-47Q2G-PYE6D-MR9ML"

# Bank details for the transaction
transaction_payload = {
    "amount": 50.00,          # The amount to be deposited
    "account_number": "687090867",  # Account number
    "ach_routing": "021202337",     # ACH routing number
    "wiring_number": "021000021",   # Wiring number
    "currency": "USD",         # Currency
    "description": "Testing transaction for $50 deposit"
}

# Headers including the API key for authentication
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# Function to perform the transaction
def perform_transaction():
    try:
        response = requests.post(chase_api_url, json=transaction_payload, headers=headers)

        # Check the response status
        if response.status_code == 201:
            print("Transaction successful. $50 has been deposited.")
        else:
            print(f"Transaction failed. Status code: {response.status_code}, Response: {response.text}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    perform_transaction()
