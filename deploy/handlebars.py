import pybars, json, os

def compile():

    #* NOTE: Grab Helpers
    helpers = {}

    #* NOTE: Load HTML File
    html_files = {}
    for (directory, _, files) in os.walk(f"{os.getcwd()}\client"):
        for file in files:
            key = f"{directory}\{file}"
            if file.split(".")[-1] == "html":
                with open(key, "r") as html_file:
                    html_files[key] = html_file.read()
        
    #* NOTE: Compile HTML
    templates = {}
    compiler = pybars.Compiler()
    for (key, value) in html_file.items():
        templates[key] = compiler.compile(value)
    
    #* NOTE: Determine Partials

    
    #* NOTE: Render Pages

    #* NOTE: Add as html file in Dist