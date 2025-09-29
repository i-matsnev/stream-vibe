import './Collections.scss'
import classNames from 'classnames'
import Tabs from "@/components/Tabs"
import collectionGroups from "./collectionGroups"
import getIdFromTitle from "@/utils/getIdFromTitle"
import Section from "@/layouts/Section"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import CategoryCard from "@/components/CategoryCard"

const Collections = (props) => {
  const {
    className,
  } = props

  return (
    <Tabs
      className={classNames('collections container', className)}
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup, index) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, index) => {
              const {
                title,
                categoryItems,
                sliderParams,
              } = collectionItem

              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormatted}-title`
              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={(
                    <SliderNavigation
                      id={sliderNavigationId}
                      mode="tile"
                    />
                  )}
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBleedOnMobileS
                  >
                    {categoryItems.map((categoryItem, index) => (
                      <CategoryCard
                        {...categoryItem}
                        key={index}
                      />
                      ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        ),
      }))}
    />
  )
}

export default Collections