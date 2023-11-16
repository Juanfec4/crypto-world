import { useEffect } from "react";

function useDisableScroll(dependencies: any[], testCondition: () => boolean) {
  useEffect(() => {
    if (testCondition()) {
      const originalOverflow = window.getComputedStyle(document.body).overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [...dependencies]);
}

export default useDisableScroll;
