<template>
  <div class="note_box">
    <h1>flex布局</h1>
    <h2>一、Flex布局是什么？</h2>
    <h4>Flex</h4>
    <h4>任何一个容器都可以指定为Flex布局。</h4>
    <pre>
    <ul class="line-numbers-rows">
      <li>.box { </li>
      <li>    display: flex;</li>
      <li>}</li>
    </ul>
  </pre>
    <h2>二、基本概念</h2>
    <h4>采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。</h4>
    <img
      src="https://www.runoob.com/wp-content/uploads/2015/07/3791e575c48b3698be6a94ae1dbff79d.png"
    />
    <h4>容器默认存在根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</h4>
    <h4>项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。</h4>
    <h2>三、容器的属性</h2>
    <h3>1. flex-direction属性</h3>
    <h4>flex-direction属性决定主轴的方向（即项目的排列方向）。</h4>
    <pre>
          <ul class="line-numbers-rows">
            <li>.box { </li>
              <li>    flex-direction: row | row-reverse | column | column-reverse;</li>
            <li>}</li>
              <li>- row（默认值）：主轴为水平方向，起点在左端。</li>
              <li>- row-reverse：主轴为水平方向，起点在右端。</li>
                <li>- column：主轴为垂直方向，起点在上沿。</li>
                <li>- column-reverse：主轴为垂直方向，起点在下沿。</li>
          </ul>
        </pre>
    <h3>2. flex-rap属性</h3>
    <h4>默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</h4>
    <pre>
          <ul class="line-numbers-rows">
              <li>.box { </li>
            <li>    flex-wrap: nowrap | wrap | wrap-reverse;</li>
            <li>}</li>
              <li>- nowrap（默认）：不换行。</li>
                <li>- wrap：换行，第一行在上方。</li>
                <li>- wrap-reverse：换行，第一行在下方。</li>
          </ul>
        </pre>
    <h3>3. flex-flew属性</h3>
    <h4>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</h4>
    <pre>
              <ul class="line-numbers-rows">
                <li>.box { </li>
                <li> flex-flow: &lt;flex-direction&gt; &lt;flex-wrap&gt;;</li>
                <li>}</li>
              </ul>
              </pre>
    <h3>4. justify-content属性</h3>
    <h4>justify-content属性定义了项目在主轴上的对齐方式。</h4>
    <pre>
          <ul class="line-numbers-rows">
                <li>.box { </li>
                <li>    justify-content: flex-start | flex-end | center | space-between | space-around;</li>
              <li>}</li>
              <li>- flex-start（默认值）：左对齐</li>
              <li>- flex-end：右对齐</li>
                <li>- center： 居中</li>
                <li> space-between：两端对齐，项目之间的间隔都相等。</li>
              <li>- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li>
          </ul>
     </pre>
    <h3>5. align-items属性</h3>
    <h4>align-items属性定义项目在交叉轴上如何对齐。</h4>
    <pre>
        <ul class="line-numbers-rows">
          
              <li>.box { </li>
                <li>    align-items: flex-start | flex-end | center | baseline | stretch;</li>
                  <li>}</li>
                         <li>- flex-end：交叉轴的终点对齐。</li>
                        <li>- center：交叉轴的中点对齐。</li>
                                            <li>- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li>
              </ul>
          </pre>
    <h3>6. align-content属性</h3>
    <h4>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</h4>
    <pre>
                    <ul class="line-numbers-rows">
                  <li>.box { </li>
                         <li>}</li>
                        <li>- flex-start：交叉轴的起点对齐。</li>
                                         <li>- center：交叉轴的中点对齐。</li>
                  <li>- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li>
                  <li>- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li>
                <li>- stretch（默认值）：轴线占满整个交叉轴。</li>
              </ul>
          </pre>
    <h2>四、项目的属性</h2>
    <h3>4.1 order属性</h3>
    <pre>
                    <ul class="line-numbers-rows">
                        <li>.box { </li>
                        <li>    order: &lt;integer&gt;;</li>
                        <li>}</li>
                  </ul>
              </pre>
    <h3>4.2 flex-grow属性</h3>
    <h4>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</h4>
    <pre>
                  <ul class="line-numbers-rows">
                    <li>.box { </li>
                      <li>    flex-grow: &lt;number&gt;; /* default 0 */</li>
                      <li>}</li>
                        <li>- 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</li>
                    </ul>
                </pre>
    <h3>4.3 flex-shrink属性</h3>
    <h4>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</h4>
    <pre>
                    <ul class="line-numbers-rows">
                        <li>.box { </li>
                        <li>    flex-shrink: &lt;number&gt;; /* default 1 */</li>
                        <li>}</li>
                        <li>- 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</li>
                        <li>负值对该属性无效。</li>
                    </ul>
                </pre>
    <h3>4.4 flex-basis属性</h3>
    <h4>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</h4>
    <pre>
                    <ul class="line-numbers-rows">
                        <li>.box { </li>
                        <li>    flex-basis: &lt;length&gt; | auto; /* default auto */</li>
                        <li>}</li>
                        <li>- 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</li>
                    </ul>
                </pre>
    <h3>4.5 flex属性</h3>
    <h4>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</h4>
    <pre>
                    <ul class="line-numbers-rows">
                        <li>.box { </li>
                        <li>    flex: none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ];</li>
                        <li>}</li>
                        <li>- 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</li>
                        <li>- 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</li>
                    </ul>
                </pre>
    <h3>4.6 align-self属性</h3>
    <h4>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</h4>
    <pre>
                    <ul class="line-numbers-rows">
                        <li>.box { </li>
                        <li>    align-self: auto | flex-start | flex-end | center | baseline | stretch;</li>
                        <li>}</li>
                        <li>- 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</li>
                    </ul>
                </pre>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  font-size: 36px;
  margin: 0;
  padding-bottom: 5px;
  text-align: center;
  border-bottom: 1px solid blueviolet;
}

h3 {
  font-size: 22px;
  margin: 5px 0;
  border-bottom: 1px solid blueviolet;
}

input {
  margin: 0;
  padding: 0;
  outline: none;
  -webkit-user-select: none;
}

a {
  text-decoration: none;
}
img {
  cursor: pointer;
}

pre {
  counter-reset: linenumber;
  background: #f5f5f5;
  white-space: nowrap;
  border-left: 10px solid grey;
  font-size: 18px;
  overflow-x: scroll;
}
.note_box {
  background: white;
}
.line-numbers-rows > li {
  counter-increment: linenumber;
  user-select: text;
  white-space: pre;
  border: 0;
}

pre::-webkit-scrollbar {
  display: none;
}

.line-numbers-rows > li:before {
  content: counter(linenumber);
  padding: 5px;
  margin: 5px;
  border-right: 1px solid#999;
  color: #999;
}
</style>