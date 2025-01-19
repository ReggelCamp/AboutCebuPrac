"use client";

import { Card, CardBody, Image } from "@nextui-org/react";

export default function Header() {
  return (
    <div className="flex w-full h-screen justify-center p-10 items-center bg-black overflow-auto">
      <div className="flex gap-10 w-full justify-center items-center ">
        <div className="w-full h-full justify-end flex">
          <Image
            className=" max-w-[500px]  max-h-[300px] object-cover rounded-full bg-blue-500 "
            // src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/451127471_7702401503200833_6667145451727271489_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s_7nJFRz2h8Q7kNvgGJuxWb&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=AkmvLKBxkGciNc11FZ0hkoX&oh=00_AYCSqMudyeMKorExrZegw7yk8iWQUpb9DpIfqcyQ127USg&oe=6792BF23"
            src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/464189462_8390308651076778_9006186087508147032_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=yx9qyt8JIaUQ7kNvgGcynUo&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=APFL89RkMp-fPmrg5wS9Ia9&oh=00_AYB7mButiI5E5yPvsJDNLW5PJrmaDAtykt2eOSaG5UXHOA&oe=6792EB5C"
          />
        </div>

        <Card className="flex w-full max-h-[300px]">
          <CardBody className=" ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
