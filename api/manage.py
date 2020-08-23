#!/usr/bin/env python3

import os
import requests
from datetime import datetime
import json

def add(env):
    url = env['domain'] + '/add'
    while True:
        title = input("title: ")
        filepath = input("filepath: ")
        tags = input("tags (comma seperated): ").split(",")
        tags = [tag.strip() for tag in tags]
        cont = input("Is this info correct? (y/n) ")
        if (cont == 'y'):
            break
    headers = {'Authorization': env['auth'], 'Content-Type': 'application/json'}
    payload = {'title': title, 'filepath': filepath, 'date': str(datetime.now()), 'tags': json.dumps(tags)}
    res = requests.post(url, headers=headers, json=payload)
    print(res.text)

def view(env):
    while True:
        try:
            skip = int(input("skip value: "))
            limit = int(input("limit value: "))
            break
        except:
            pass
    headers = {'Authorization': env['auth'], 'Content-Type': 'application/json'}
    payload = {'skip': skip, 'limit': limit}
    res = requests.post(env['domain'], headers=headers, json=payload)
    posts = res.json()
    while True:
        cont = input("Verbose? (y/n) ")
        if (cont == 'y'):
            v = True
            break
        if (cont == 'n'):
            v = False
            break
    for i, post in enumerate(posts):
        if v == False:
            print(f"[{str(i)}] {post['title']}")
        else:
            msg = f"[{str(i)}] {post['title']}"
            msg += f"\n\t{post['filepath']}"
            msg += f"\n\t{post['date']}"
            if (len(post['tags']) > 0):
                tags = json.loads(post['tags'][0])
                if (tags != ['']):
                    msg += f"\n\ttags:"
                    for tag in tags:
                        msg += f"\n\t\t{tag}"
            print(msg, "\n")

def search(env):
    url = env['domain'] + '/search'
    while True:
        try:
            search = input("search: ")
            skip = int(input("skip value: "))
            limit = int(input("limit value: "))
            break
        except:
            pass
    headers = {'Authorization': env['auth'], 'Content-Type': 'application/json'}
    payload = {'skip': skip, 'limit': limit, 'search': search}
    res = requests.post(url, headers=headers, json=payload)
    posts = res.json()
    for i, post in enumerate(posts):
        print(f"[{str(i)}] {post['title']}")



def process(env, opt):
    if opt == 1:
        add(env)
    elif opt == 2:
        view(env)
    elif opt == 3:
        search(env)
    elif opt == 4:
        update(env)
    elif opt == 5:
        delete(env)


def menu():
    menu = """
    1. Add Posts
    2. View Posts
    3. Search Posts
    4. Update Post
    5. Delete Post
    """
    print(menu)
    opt = input("> ")
    while True:
        try:
            opt = int(opt)
            if opt > 0 and opt < 6:
                break
        except:
            pass
        print(menu)
        opt = input("> ")
    return opt

def main():
    try:
        auth = os.environ['AUTH']
        domain = 'https://api.' + os.environ['DOMAIN'] + '/posts'
        env = {'auth': auth, 'domain': domain}
    except KeyError as e:
        print(f"error {e} env var not set")
        return

    opt = menu()
    process(env, opt)

if __name__ == '__main__':
    main()
