import { Menu, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Container } from "./Container";
import { Button } from "./ui/Button";

const NAV_LINKS = [
  { to: "/", name: "Главная" },
  { to: "/recipes", name: "Рецепты" },
  { to: "/recipes/bookmarks", name: "Отложенные" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full flex-row bg-base-100">
      <Container className="flex h-full flex-row items-center px-2">
        <Menu as="div" className="block flex-1 md:hidden">
          <Menu.Button as={Fragment}>
            {({ open }) => (
              <button className="daisy-btn-ghost daisy-btn-circle daisy-btn relative">
                {open !== true && <Bars3BottomLeftIcon className="h-5 w-5" />}
                {open === true && <XMarkIcon className="h-5 w-5" />}
              </button>
            )}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="nav"
              className="rounded-box absolute top-[var(--header-height)] my-2 flex origin-top-left flex-col  bg-base-100 p-2 shadow"
            >
              {NAV_LINKS.map((nl, idx) => (
                <Menu.Item key={idx}>
                  <Link to={nl.to} className="daisy-btn-ghost daisy-btn justify-start">
                    {nl.name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        <div>
          <Button
            as={Link}
            to="/"
            role="button"
            className="daisy-btn-secondary daisy-btn text-xl normal-case md:-ml-4"
          >
            eda.pro
          </Button>
        </div>

        <div className="hidden flex-row md:flex">
          {NAV_LINKS.map((nl, idx) => (
            <Button as={Link} key={idx} to={nl.to} color="ghost">
              {nl.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-1 flex-row justify-end">
          <Button as={Link} to="/recipes" color="ghost" className="daisy-btn-circle">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </header>
  );
};
