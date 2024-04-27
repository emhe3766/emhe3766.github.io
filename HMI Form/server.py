from http.server import HTTPServer, SimpleHTTPRequestHandler, CGIHTTPRequestHandler
import cgitb; cgitb.enable()  # Enable CGI error reporting

class ServerHandler(CGIHTTPRequestHandler):
    cgi_directories = ['/']

def run(server_class=HTTPServer, handler_class=ServerHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print("Server started at http://localhost:8000")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
