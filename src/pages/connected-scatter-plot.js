import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Seaborn } from "../components/MiscellaneousLogos"
import { Button, Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/connectedscatter.html'>connected scatterplot</a> is a <a href='https://python-graph-gallery.com/line-chart/'>line chart</a> where each data point is shown by a circle or any type of marker. This section explains how to build a connected scatterplot with <code>Python</code>, using both the <code>Matplotlib</code> and the <code>Seaborn</code> libraries.</p>";

const quickCode = `# library
import seaborn as sns
import pandas as pd
import numpy as np

# Create a dataset
df = pd.DataFrame(np.random.random((5,5)), columns=["a","b","c","d","e"])

# Default heatmap
p1 = sns.heatmap(df)
`

export default function ConnectedScatter() {

  return (

    <Layout title="Connected Scatterplot" isTocEnabled seoDescription="A collection of connected scatterplot examples made with Python, coming with explanation and reproducible code">

      <TitleAndDescription
        title="Connected Scatterplot"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick">&#9201; Quick start</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p>TODO.🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/132-basic-connected-scatterplot"}>
              <ChartImage imgName="132_Matplotlib-connected-scatterplot"
                caption="Basic connected scatterplot with Python and Seaborn." />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
        <br />
      </Container>

      <Spacing />

      <div className="greySection">
        <Container>
          <h2 id="Warning">&#9888;&#65039; Two types of connected scatterplot</h2>
          <p>There are two types of connected scatterplot, and it often creates confusion.</p>
          <p>
            The <u>first</u> is simply a <Link to='/line-chart'>lineplot</Link> with dots added
            on top of it. It takes as input 2 numeric variables only. The <u>second</u> shows the relationship
            between 2 numeric variables across time. It requires 3 numeric variables as input.</p>
          <p>Confusing? Visit <a href='https://www.data-to-viz.com/graph/connectedscatter.html'>data-to-viz</a> to clarify..</p>
          <a href='https://www.data-to-viz.com/graph/connectedscatter.html'>
            <Button size="sm">Read more</Button>
          </a>
        </Container>
      </div>

      <Spacing />

      <Container>
        <h2 id="Seaborn"><Seaborn />Connected scatterplot with <code>Seaborn</code></h2>
        <p>
          Building a connected scatterplot with <code>Seaborn</code> looks pretty much the same as for
          a line chart, so feel free to visit the related section. Here are a few examples to remind the
          basics and understand how to customize the markers.
        </p>
        <Row>
          <ChartImageContainer
            imgName="132_Matplotlib-connected-scatterplot"
            caption="Basic connected scatterplot with Python and Seaborn."
            linkTo="/132-basic-connected-scatterplot"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Matplotlib"><Matplotlib />Connected scatterplot with <code>Matplotlib</code></h2>
        <p>
          As for <Link to='/scatter-plot'>scatterplots</Link>, <code>Matplotlib</code> will help us build a bubble plot thanks to
          the the <code>plt.scatter()</code> function. This function provides a <code>s</code> parameter allowing
          to pass a third variable that will be mapped to the markers size.
        </p>
        <Row>
          <ChartImageContainer
            imgName="106_seaborn_style_on_plt1"
            caption="Basic connected scatterplot with Python and Matplotlib"
            linkTo="/106-seaborn-style-on-matplotlib-plot"
          />
          <ChartImageContainer
            imgName="194_matplotlib_subplot6"
            caption="Connected scatterplot on a split window"
            linkTo="/194-split-the-graphic-window-with-subplot"
          />
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="How to customize line and markers with Matplotlib"
            linkTo="/122-multiple-lines-chart"
          />
        </Row>
        <br />
        <p>Cheatsheet: line customization with <code>Matplotlib</code> and the <code>linestyle</code> parameter.</p>
        <div style={{ maxWidth: '350px' }}>
          <Link to={"/121-line-chart-customization"}>
            <ChartImage imgName={"121_Custom_line_plot4"} caption={'Cheat sheet: line customization with matplotlib'} />
          </Link>
        </div>
      </Container>

      <Spacing />


      <Container>
        <h2 id="Matplotlib"><Matplotlib />Connected scatterplot for 2 variables</h2>
        <p>
          As explained above, a connected scatterplot can also be base on 3 numeric variables. It allows to
          study the evolution of 2 variables (placed on the X and on the Y axis).
        </p>
        <div style={{ maxWidth: '550px' }}>
          <Link to={"/connected-scatterplot-for-evolution"}>
            <ChartImage imgName={"connected-scatterplot-for-evolution"} caption={'Connected scatterplot to show the evolution of 2 variables'} />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <h2 id="From the web"><Matplotlib />From the web</h2>
        <p>The web is full of astonishing charts made by awesome bloggers, (often
          using <a href="https://www.r-graph-gallery.com">R</a>).
          The <a href="https://www.python-graph-gallery.com">Python graph gallery</a> tries to
          display (or translate from R) some of the best creations and explain how their source
          code works. If you want to display your work here, please drop me a word or
          even better, submit a <a href="https://github.com/holtzy/The-Python-Graph-Gallery">Pull Request</a>!
        </p>
        <Row>
          <Col xs={12} md={6}>
            <Link to={"/web-text-repel-with-matplotlib"}>
              <ChartImage imgName={"web-text-repel-with-matplotlib-square"} caption={"Learn how to use the adjustText library to add many labels with no overlaps."} />
            </Link>
          </Col>
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="correlation" />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />

    </Layout >
  );
}
