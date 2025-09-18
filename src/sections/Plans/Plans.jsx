import './Plans.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section"
import Button from "@/components/Button"
import Grid from "@/components/Grid"
import planGroups from "./planGroups"
import PlanCard from "@/components/PlanCard"

const Plans = (props) => {
  const {
    className,
  } = props

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-title"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={( <Button label="Ask a Question" href="/support" /> )}
    >
      <Grid columns={3}>
        {planGroups[0].items.map((planItem, index) => (
          <PlanCard
            {...planItem}
            key={index}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Plans