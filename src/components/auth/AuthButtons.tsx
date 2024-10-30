import { SignedIn, SignedOut, SignInButton, UserButton, useClerk } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

const AuthButtons = () => {
  const { loaded } = useClerk();

  const handleSignInError = useCallback((error: Error) => {
    console.error("Sign in error:", error);
    // You could also use your toast system here to show errors
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <Button 
          variant="ghost" 
          className="text-primary hover:text-primary/90 hover:bg-primary/10"
          asChild
        >
          <SignInButton afterSignInUrl="/" afterSignUpUrl="/" onError={handleSignInError} />
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