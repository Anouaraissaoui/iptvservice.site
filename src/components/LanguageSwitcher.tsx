import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "de", name: "Deutsch" }
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => i18n.changeLanguage(lang.code)}
          className="text-sm"
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;