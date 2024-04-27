#!/usr/bin/env python3
import cgi
from html import escape

def main():
    print("Content-type: text/html\n")
    form = cgi.FieldStorage()
    name = escape(form.getfirst("name", "empty"))
    email = escape(form.getfirst("email", "empty"))
    date = escape(form.getfirst("date", "empty"))

    # Display back to the user
    print(f"<h2>Hello {name}!</h2>")
    print(f"<p>Your email is: {email}</p>")
    print(f"<p>Date: {date}</p>")

if __name__ == "__main__":
    main()
