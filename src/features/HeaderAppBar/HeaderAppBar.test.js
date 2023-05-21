import { render, screen } from "@testing-library/react"
import HeaderAppBar from "./HeaderAppBar"

test('should render', () => {
    const { getByTestId } = render(<HeaderAppBar />);
    const name = getByTestId("appHeaderName")
    const date = getByTestId("appHeaderTitle")
    const title = getByTestId("appHeaderDate")

    expect(name).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(title).toBeInTheDocument()
})
