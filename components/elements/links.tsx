import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "../ui/card";

export default function Links() {
  const link = [
    {
      name: "github",
      icon: <GitHubLogoIcon />,
      userName: "chakkun1121",
      url: "https://github.com/chakkun1121",
    },
    {
      name: "note",
      userName: "chakkun1121",
      url: "https://note.com/chakkun1121",
    },
  ];
  return (
    <section className="space-y-4 py-8">
      <h2 className="text-2xl">アカウント</h2>
      <div className="space-y-2">
        {link.map(({ name, icon, userName, url }) => (
          <Card>
            <CardContent className="flex items-center justify-between gap-4 p-6 text-xl">
              <div className="flex items-center gap-2">
                {icon ? icon : null}
                <p>{name}</p>
                <p className="opacity-70">{userName}</p>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto"
              >
                <ExternalLinkIcon />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
