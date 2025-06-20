import React, { useState } from "react";
import { skillsIcons } from "../constants/tech-icons";
import { useTranslation } from "react-i18next";

const TouchIndicatorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-white opacity-70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const FlipCard = ({ category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const CategoryIcon = skillsIcons[category.icon]?.icon;
  const categoryColor = skillsIcons[category.icon]?.color;

  const { t } = useTranslation();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-full h-full cursor-pointer transition-transform duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] transform-style-preserve-3d ${
        isFlipped ? "rotate-y-180" : ""
      }`}
      onClick={handleClick}
      role="button"
      tabIndex="0"
      aria-pressed={isFlipped}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <div className="absolute w-full h-full bg-gradient-to-br from-[#00A4EF] to-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden p-6">
        {CategoryIcon && (
          <div className="mb-4 text-4xl" style={{ color: categoryColor }}>
            {Array.isArray(CategoryIcon) ? (
              <div className="flex gap-2">
                {CategoryIcon.map((Icon, i) => (
                  <Icon
                    key={i}
                    style={{
                      color: Array.isArray(categoryColor)
                        ? categoryColor[i]
                        : categoryColor,
                    }}
                  />
                ))}
              </div>
            ) : (
              <CategoryIcon />
            )}
          </div>
        )}

        <h3 className="text-2xl font-bold text-white text-center">
          {category.category}
        </h3>

        <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-60 ">
          <span className="text-xs text-white">{t("seeMore")}</span>
          <TouchIndicatorIcon />
        </div>
      </div>

      <div className="absolute w-full h-full bg-white rounded-xl shadow-lg rotate-y-180 backface-hidden p-6 overflow-hidden">
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            {CategoryIcon && !Array.isArray(CategoryIcon) && (
              <span style={{ color: categoryColor }}>
                <CategoryIcon />
              </span>
            )}
            {category.category}
          </h3>
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#00A4EF] scrollbar-track-gray-100">
            <ul className="space-y-3">
              {category.items.map((skill, skillIndex) => {
                const { icon: IconComponent, color } = skillsIcons[skill];

                return (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    {Array.isArray(IconComponent) ? (
                      <div className="flex gap-1">
                        {IconComponent.map((Icon, i) => (
                          <Icon
                            key={i}
                            className="text-xl min-w-[24px]"
                            style={{
                              color: Array.isArray(color) ? color[i] : color,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <IconComponent
                        className="text-xl min-w-[24px]"
                        style={{ color }}
                      />
                    )}
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
