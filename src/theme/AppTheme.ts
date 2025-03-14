export type AppThemeProps = {
  "app.common.background.color": string;
  "app.common.text.color": string;
  "app.common.borderAll.color": string;
  "app.common.borderLeft.color": string;
  "app.common.borderRight.color": string;
  "app.common.borderTop.color": string;
  "app.common.borderBottom.color": string;
  "app.mainContent.background.color": string;
};

export const LightWhiteBlack: AppThemeProps = {
  "app.common.background.color": "bg-white",
  "app.common.text.color": "text-gray-900",
  "app.common.borderAll.color": "border border-gray-200",
  "app.common.borderLeft.color": "border-l border-gray-200",
  "app.common.borderRight.color": "border-r border-gray-200",
  "app.common.borderTop.color": "border-t border-gray-200",
  "app.common.borderBottom.color": "border-b border-gray-200",
  "app.mainContent.background.color": "bg-gray-50",
};

export const DarkGrayWhite: AppThemeProps = {
  "app.common.background.color": "bg-black",
  "app.common.text.color": "text-white",
  "app.common.borderAll.color": "border border-gray-800",
  "app.common.borderLeft.color": "border-l border-gray-800",
  "app.common.borderRight.color": "border-r border-gray-800",
  "app.common.borderTop.color": "border-t border-gray-800",
  "app.common.borderBottom.color": "border-b border-gray-800",
  "app.mainContent.background.color": "bg-gray-950",
};
