import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <Button 
          variant="ghost" 
          className="text-primary hover:text-primary/90 hover:bg-primary/10"
          asChild
        >
          <SignInButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              rootBox: "h-8 w-8",
              avatarBox: "h-8 w-8 rounded-full",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default AuthButtons;