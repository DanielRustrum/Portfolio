import pybars, json, os

def compile():
    def _get_html_file_type(file_list):
        if file_list[-2] == "page":
            return "page"
        elif file_list[-2] == "partial":
            return "partial"
        else:
            return "component"

    #* NOTE: Grab Helpers
    helpers = {}

    #* NOTE: Load Data

    #* NOTE: Load, compile, and type HTML Files
    templates = {}
    compiler = pybars.Compiler()
    for (directory, _, files) in os.walk(f"{os.getcwd()}\\client"):
        for file in files:
            key = f"{directory}\\{file}"
            file_list = file.split(".")
            file_extension = file_list[-1]
            if file_extension == "html":
                file_type = _get_html_file_type(file_list)
                with open(key, "r") as html_file:
                    templates[key] = {
                        "source": compiler.compile(html_file.read()),
                        "type": file_type,
                    }

    #* NOTE: Render Pages

    #* NOTE: Dump Pages In Dist