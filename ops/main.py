import args, deploy, build

if __name__ == "__main__":
    args.load()
    build.compile()

    if args.get_flag("dev"):
        pass
    else:
        deploy.deploy()
